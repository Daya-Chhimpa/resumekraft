import React from 'react';
import { Plus, GripVertical, Trash2 } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableEducationItem = ({ id, edu, handleChange, handleDelete }) => {
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
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
        ref={setNodeRef} 
        style={style} 
        className={`p-4 border border-slate-100 rounded-lg bg-slate-50 relative group transition-colors hover:border-slate-200 hover:shadow-sm ${isDragging ? 'shadow-xl ring-2 ring-pink-500/20 bg-white' : ''}`}
    >
       <div className="absolute right-2 top-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
           <button 
             {...attributes} 
             {...listeners} 
             className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded cursor-grab active:cursor-grabbing"
           >
             <GripVertical className="w-4 h-4" />
           </button>
           <button 
             onClick={() => handleDelete(id)}
             className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded"
           >
             <Trash2 className="w-4 h-4" />
           </button>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase">Institution</label>
            <input
              type="text"
              name="institution"
              value={edu.institution}
              onChange={(e) => handleChange(id, e)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="University / School"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase">Degree</label>
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(id, e)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Degree / Major"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase">Start Date</label>
            <input
              type="text"
              name="startDate"
              value={edu.startDate}
              onChange={(e) => handleChange(id, e)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YYYY"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase">End Date</label>
            <input
              type="text"
              name="endDate"
              value={edu.endDate}
              onChange={(e) => handleChange(id, e)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YYYY"
            />
          </div>
       </div>
    </div>
  );
};

const EducationForm = () => {
  const { resumeData, addEducation, updateEducation, reorderSection, removeSectionItem } = useResumeStore();
  const { education } = resumeData;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = education.findIndex((item) => item.id === active.id);
      const newIndex = education.findIndex((item) => item.id === over.id);
      reorderSection('education', oldIndex, newIndex);
    }
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateEducation(id, name, value);
  };

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this education entry?')) {
        removeSectionItem('education', id);
    }
  };

  return (
    <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
           <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></span>
           Education
        </h3>
        <button
          onClick={addEducation}
          className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-80 transition-opacity"
        >
          <Plus className="w-5 h-5 mr-1 text-purple-500" /> Add Education
        </button>
      </div>

      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={education.map(edu => edu.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-6">
            {education.map((edu) => (
              <SortableEducationItem 
                key={edu.id} 
                id={edu.id} 
                edu={edu} 
                handleChange={handleChange} 
                handleDelete={handleDelete}
              />
            ))}
            
            {education.length === 0 && (
              <div className="text-center py-6 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                No education added yet.
              </div>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default EducationForm;
