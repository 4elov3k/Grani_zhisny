'use client';

import React, {type ElementRef, MutableRefObject, useEffect, useRef} from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({children}:{children:React.ReactNode}) {
  const router = useRouter();
  const dialogRef = React.useRef<ElementRef<"dialog"> |null> (null);


  
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss(event:any) {
    if (event.target.tagName === "DIALOG" || event.target.tagName === "BUTTON"){
      router.back();
    }


  }

  return createPortal(
    <div className="modal-backdrop" onClick={onDismiss}>
      <dialog ref={dialogRef} className="modal">
        {children}
        <button className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
