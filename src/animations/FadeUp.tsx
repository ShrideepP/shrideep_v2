import { FC, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface FadeUpProps {
  children: JSX.Element;
};

const FadeUp: FC<FadeUpProps> = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const fadeUpControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      fadeUpControls.start('visible');
    };
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <motion.div
        variants={{
          hidden: { y: 75 },
          visible: { y: 0 }
        }}
        initial="hidden"
        animate={fadeUpControls}
        transition={{ type: 'tween', duration: 0.25, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeUp;
