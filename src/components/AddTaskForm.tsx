import { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddTaskFormProps {
  onAddTask: (text: string, dueDate?: string, category?: string) => void;
  onCancel: () => void;
}

const AddTaskForm = ({ onAddTask, onCancel }: AddTaskFormProps) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim() === '') {
      setError("Task description can't be empty");
      return;
    }
    
    onAddTask(text, dueDate, category);
    resetForm();
  };

  const resetForm = () => {
    setText('');
    setDueDate('');
    setCategory('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="task-text">Task</Label>
        <Input
          id="task-text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (e.target.value.trim() !== '') setError('');
          }}
          placeholder="What needs to be done?"
          className={error ? 'border-error' : ''}
        />
        {error && <p className="text-sm text-error">{error}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="due-date" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" /> Due Date (Optional)
        </Label>
        <Input
          id="due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category" className="flex items-center gap-2">
          <Tag className="h-4 w-4" /> Category (Optional)
        </Label>
        <Input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Work, Personal, Shopping, etc."
        />
      </div>
      
      <div className="flex justify-end gap-2 pt-2">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          className="bg-primary text-primary-foreground hover:bg-primary-600"
        >
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
