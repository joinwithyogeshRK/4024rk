import { useState } from 'react';
import { Trash, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Todo } from '@/pages/Home';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleToggle = () => {
    onToggle(todo.id);
  };
  
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <Card 
      className={`todo-card group ${todo.completed ? 'bg-muted/30' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <div className="pt-0.5">
            <Checkbox 
              id={`todo-${todo.id}`} 
              checked={todo.completed}
              onCheckedChange={handleToggle}
              className={todo.completed ? 'task-complete-animation' : ''}
            />
          </div>
          
          <div className="flex-1">
            <label 
              htmlFor={`todo-${todo.id}`} 
              className={`block text-base font-medium ${todo.completed ? 'task-text-completed' : 'text-foreground'}`}
            >
              {todo.text}
            </label>
            
            <div className="mt-2 flex flex-wrap gap-2">
              {todo.dueDate && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{todo.dueDate}</span>
                </div>
              )}
              
              {todo.category && (
                <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary-foreground border-secondary/20">
                  <Tag className="h-3 w-3 mr-1" />
                  {todo.category}
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleDelete}
          className={`text-muted-foreground hover:text-error hover:bg-error/10 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
