import { ReactNode, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated, easings } from '@react-spring/web';

type ModalProps = {
  children: ReactNode;
  onCloseModal: (flag: boolean) => void;
};

const portalDom =
  document.getElementById('portal') ||
  document.body.appendChild(document.createElement('div'));

const Modal = ({ children, onCloseModal }: ModalProps) => {
  const [outterProps] = useSpring(
    () => ({
      from: { opacity: 0.1 },
      to: { opacity: 1 },
      config: {
        easing: easings.easeInElastic,
      },
    }),
    []
  );

  const [innerProps] = useSpring(
    () => ({
      from: { opacity: 0, y: 80 },
      to: { opacity: 1, y: 0 },
      config: {
        easing: easings.easeInElastic,
      },
      delay: 100,
    }),
    []
  );

  function handleOnCloseModal(ev: MouseEvent<HTMLDivElement>) {
    if (ev.target === ev.currentTarget) {
      onCloseModal(false);
    } else {
      ev.stopPropagation();
    }
  }

  return createPortal(
    <animated.div style={outterProps} data-testid="modal">
      <div
        onClick={handleOnCloseModal}
        className="w-[100vw] h-[100vh] bg-gradient-to-t from-bgDark fixed top-0 left-0 z-10 flex items-end justify-center"
      >
        <animated.div style={innerProps}>{children}</animated.div>
      </div>
    </animated.div>,
    portalDom as Element
  );
};

export default Modal;
