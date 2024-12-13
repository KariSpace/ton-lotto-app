import { ReactNode } from 'react';
import styles from './Layout.module.css';
import { MenuBar } from '../MenuBar/MenuBar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <MenuBar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}