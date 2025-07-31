import { Suspense } from 'react';
import TabsTransitionPanel from './TabsTransitionPanel';

export default function CoursesPage() {
  return (
    <Suspense fallback={<div></div>}>
      <TabsTransitionPanel />
    </Suspense>
  );
}
