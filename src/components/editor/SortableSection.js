import React from 'react';
import { GripVertical } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableSection = ({ id, children, title }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      id={`section-${id}`}
      className={`transition-all duration-300 rounded-2xl relative overflow-hidden ${
        isDragging ? 'opacity-50 scale-105 shadow-2xl ring-4 ring-indigo-500/30' : ''
      }`}
    >
      {/* Drag Handle Bar - Always Visible at Top */}
      <div 
        {...attributes}
        {...listeners}
        className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b-2 border-indigo-100 px-4 py-2 cursor-grab active:cursor-grabbing hover:from-indigo-100 hover:to-purple-100 transition-all group"
      >
        <div className="flex items-center gap-2">
          <GripVertical className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            Drag to Reorder {title}
          </span>
          <div className="ml-auto flex gap-1">
            <div className="w-1 h-1 rounded-full bg-indigo-300"></div>
            <div className="w-1 h-1 rounded-full bg-indigo-300"></div>
            <div className="w-1 h-1 rounded-full bg-indigo-300"></div>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default SortableSection;
