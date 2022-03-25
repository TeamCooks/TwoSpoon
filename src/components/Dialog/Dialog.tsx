import { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { getTabbableElements } from 'utils';
import { StyledCloseButton, StyledDialogContainer, StyledDialogContent, StyledDim } from './Dialog.styled';
import { DialogProps } from './Dialog.types';

export function Dialog({ onClose, children, nodeId = 'dialog', label, ...restProps }: DialogProps) {
  const dialogRef = useRef(null);
  const openButtonRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose();
    openButtonRef.current.focus();
  }, [onClose]);

  useEffect(() => {
    openButtonRef.current = document.activeElement;

    const tabbableElements = getTabbableElements(dialogRef.current!);
    const firstTabbableElement = tabbableElements[0];
    const lastTabbableElement = tabbableElements[tabbableElements.length - 1];

    firstTabbableElement.focus();
    let eventType = 'keydown';

    const eventListener = (e: KeyboardEvent) => {
      const { key, shiftKey, target } = e;

      if (Object.is(target, firstTabbableElement) && shiftKey && key === 'Tab') {
        e.preventDefault();
        lastTabbableElement.focus();
      }

      if (Object.is(target, lastTabbableElement) && !shiftKey && key === 'Tab') {
        e.preventDefault();
        firstTabbableElement.focus();
      }

      if (key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener(eventType as keyof DocumentEventMap, eventListener as EventListener);
    document.body.style['overflow-y'] = 'hidden';
    document.getElementById('__next')!.setAttribute('aria-hidden', 'true');

    return () => {
      document.removeEventListener(eventType, eventListener as EventListener);
      document.getElementById('__next')!.removeAttribute('aria-hidden');
      document.body.style['overflow-y'] = '';
    };
  }, [handleClose, label]);

  return createPortal(
    <>
      <StyledDialogContainer
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-hidden="false"
        aria-label={`${label} Dialog`}
        {...restProps}
      >
        <StyledDialogContent>{children}</StyledDialogContent>
        <StyledCloseButton
          ariaLabel={`Close ${label} dialog.`}
          iconType="close"
          type="button"
          variant="transparent"
          color="white"
          size="large"
          onClick={onClose}
        />
      </StyledDialogContainer>
      <StyledDim role="presentation" onClick={onClose} />
    </>,
    document.getElementById(nodeId),
  );
}
