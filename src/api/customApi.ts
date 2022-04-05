import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  increment,
  getDoc,
  collection,
  getDocs,
  Timestamp,
  orderBy,
  limit,
  query,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { RecipeDetail } from 'components/Accordion/Accordion.types';

initializeApp(firebaseConfig);

const db = getFirestore();

interface Recipe {
  recipeId: string;
  title: string;
  image: string;
  creditsText: string;
  tags: string[];
  readyInMinutes: number;
  savedCount: number;
  savedBy: string[];
  recipeDetails: RecipeDetail;
}

export const saveRecipe = async (userId: string, recipeData: Recipe) => {
  const myRecipesRef = doc(db, 'users', userId, 'my-recipes', recipeData.recipeId);
  const savedRecipesRef = doc(db, 'savedRecipes', recipeData.recipeId);
  const savedRecipesSnap = await getDoc(savedRecipesRef);

  await setDoc(myRecipesRef, {
    id: recipeData.recipeId,
    title: recipeData.title,
    image: recipeData.image,
    savedAt: Timestamp.fromDate(new Date()),
  });

  if (savedRecipesSnap.exists()) {
    await updateDoc(savedRecipesRef, {
      savedCount: increment(1),
      savedBy: arrayUnion(userId),
    });
  } else {
    await setDoc(savedRecipesRef, { ...recipeData, savedCount: 1, savedBy: [userId] });
  }
};

export const removeRecipe = async (userId: string, recipeId: string) => {
  const myRecipesRef = doc(db, 'users', userId, 'my-recipes', recipeId);
  const savedRecipesRef = doc(db, 'savedRecipes', recipeId);
  const savedRecipesSnap = await getDoc(savedRecipesRef);

  await deleteDoc(myRecipesRef);

  if (savedRecipesSnap.exists()) {
    await updateDoc(savedRecipesRef, {
      savedCount: increment(-1),
      savedBy: arrayRemove(userId),
    });
  }
};

export const getMyRecipes = async (userId: string) => {
  const myRecipesRef = collection(db, 'users', userId, 'my-recipes');
  const q = query(myRecipesRef, orderBy('savedAt', 'desc'));
  const myRecipesSnapShot = await getDocs(q);
  const myRecipes = [];
  myRecipesSnapShot.forEach((doc) => {
    myRecipes.push(doc.data());
  });
  return myRecipes;
};

export const getHotRecipes = async (num = 6) => {
  const hotRecipesRef = collection(db, 'savedRecipes');
  const q = query(hotRecipesRef, orderBy('savedCount', 'desc'), limit(num));
  const hotRecipesSnapshot = await getDocs(q);
  const hotRecipes = [];
  hotRecipesSnapshot.forEach((doc) => {
    hotRecipes.push(doc.data());
  });
  return hotRecipes;
};

export const getSavedRecipe = async (recipeId: string) => {
  const savedRecipeRef = doc(db, 'savedRecipes', recipeId);
  const savedRecipeSnap = await getDoc(savedRecipeRef);

  if (savedRecipeSnap.exists()) {
    return savedRecipeSnap.data();
  } else {
    return null;
  }
};
