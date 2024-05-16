import { useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';
import Icon from '@/components/ui/icon/Icon';
import { clsx } from 'clsx';
import styles from './BottomActionSheet.module.scss';

// TODO: add exit animation
interface Items {
  key: string;
  value: string;
}

interface BottomActionSheetProps {
  items: Items[];
  selectedKey: string;
  onClickItem?: (key: string) => void;
}

export default function BottomActionSheet(props: BottomActionSheetProps) {
  const { items, selectedKey, onClickItem = () => {} } = props;
  const [isPresent, safeToRemove] = usePresence();

  const itemClasses = (key: string) => {
    return clsx(styles.item, {
      [styles.selected]: selectedKey === key,
    });
  };

  useEffect(() => {
    if (!isPresent) setTimeout(safeToRemove, 1000);
  }, [isPresent, safeToRemove]);

  const containerVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <div className={styles.header}>
        <button className={styles.closeButton}>
          <Icon name="close" />
        </button>
      </div>
      <div className={styles.list}>
        {items.map((item) => (
          <motion.button
            key={item.key}
            className={itemClasses(item.key)}
            onClick={() => onClickItem(item.key)}
            whileTap={{ scale: 0.95 }}
          >
            {item.value}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
