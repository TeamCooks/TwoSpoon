import { useState, useEffect } from 'react';
import { StyledForm, StyledInput, StyledIconButton } from './SearchForm.styled';
import { useRouter } from 'next/router';

export const SearchForm = () => {
  const [keyword, setKeyword] = useState('');

  const router = useRouter();

  
  useEffect(() => {
    const handleRouteChange = () => {
      setKeyword('');
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search/${keyword}`);
    } else {
      alert('Please enter the search word.');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label className="a11yHidden" htmlFor="searchRecipe">
        Search recipes
      </label>
      <StyledInput id="searchRecipe" type="search" autoComplete="off" value={keyword} onChange={handleChange} />
      <StyledIconButton
        type="submit"
        ariaLabel="search"
        iconType="search"
        variant="transparent"
        color="black"
        size="small"
      >
        검색
      </StyledIconButton>
    </StyledForm>
  );
};
