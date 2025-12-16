import React from 'react';
import { Plus, X, GripVertical } from 'lucide-react';
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
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableSkillItem = ({ id, skill, handleChange, removeSectionItem }) => {
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
            className={`flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg group ${isDragging ? 'opacity-50' : ''}`}
        >
            <button
                {...attributes}
                {...listeners}
                className="cursor-move text-slate-400 hover:text-slate-600"
            >
                <GripVertical className="w-4 h-4" />
            </button>
            <input
                type="text"
                value={skill.name}
                onChange={(e) => handleChange(id, e.target.value)}
                className="bg-transparent border-none focus:outline-none text-sm text-slate-700 w-24"
                placeholder="Skill"
            />
            <button
                onClick={() => removeSectionItem('skills', id)}
                className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

const SkillsForm = () => {
  const { resumeData, addSkill, updateSkill, reorderSection, removeSectionItem } = useResumeStore();
  const { skills } = resumeData;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = skills.findIndex((item) => item.id === active.id);
      const newIndex = skills.findIndex((item) => item.id === over.id);
      reorderSection('skills', oldIndex, newIndex);
    }
  };

  const handleChange = (id, value) => {
    updateSkill(id, 'name', value);
  };

  return (
    <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
           <span className="w-1 h-6 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></span>
           Skills
        </h3>
        <button
          onClick={addSkill}
          className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 hover:opacity-80 transition-opacity"
        >
          <Plus className="w-5 h-5 mr-1 text-teal-500" /> Add Skill
        </button>
      </div>

      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={skills.map(s => s.id)}
          strategy={rectSortingStrategy}
        >
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SortableSkillItem
                key={skill.id}
                id={skill.id}
                skill={skill}
                handleChange={handleChange}
                removeSectionItem={removeSectionItem}
              />
            ))}
            {skills.length === 0 && (
              <div className="w-full text-center py-6 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                No skills added yet.
              </div>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default SkillsForm;
