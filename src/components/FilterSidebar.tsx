import React from 'react';

interface FilterSidebarProps {
    tags: string[];
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ tags, selectedTag, onSelectTag }) => {
    return (
        <div className="filter-sidebar">
            <ul>
                <li className={selectedTag === null ? 'active' : ''} onClick={() => onSelectTag(null)}>
                    Все темы
                </li>
                {tags.map(tag => (
                    <li key={tag} className={selectedTag === tag ? 'active' : ''} onClick={() => onSelectTag(tag)}>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterSidebar;