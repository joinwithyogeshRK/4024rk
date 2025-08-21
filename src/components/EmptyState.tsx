import { ClipboardList } from 'lucide-react';

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="empty-state flex flex-col items-center justify-center py-12">
      <div className="bg-primary/10 p-4 rounded-full mb-4">
        <ClipboardList className="h-8 w-8 text-primary" />
      </div>
      <p className="text-muted-foreground text-center">{message}</p>
    </div>
  );
};

export default EmptyState;
