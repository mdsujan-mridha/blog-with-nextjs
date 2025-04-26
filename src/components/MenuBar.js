'use client';

import React from 'react';

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const buttons = [
    { label: 'Bold', action: () => editor.chain().focus().toggleBold().run(), active: editor.isActive('bold') },
    { label: 'Italic', action: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive('italic') },
    { label: 'Strike', action: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive('strike') },
    { label: 'Code', action: () => editor.chain().focus().toggleCode().run(), active: editor.isActive('code') },
    { label: 'Clear Marks', action: () => editor.chain().focus().unsetAllMarks().run() },
    { label: 'Clear Nodes', action: () => editor.chain().focus().clearNodes().run() },
    { label: 'Paragraph', action: () => editor.chain().focus().setParagraph().run(), active: editor.isActive('paragraph') },
    { label: 'H1', action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: editor.isActive('heading', { level: 1 }) },
    { label: 'H2', action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive('heading', { level: 2 }) },
    { label: 'H3', action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive('heading', { level: 3 }) },
    { label: 'Bullet List', action: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive('bulletList') },
    { label: 'Ordered List', action: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive('orderedList') },
    { label: 'Code Block', action: () => editor.chain().focus().toggleCodeBlock().run(), active: editor.isActive('codeBlock') },
    { label: 'Blockquote', action: () => editor.chain().focus().toggleBlockquote().run(), active: editor.isActive('blockquote') },
    { label: 'Horizontal Rule', action: () => editor.chain().focus().setHorizontalRule().run() },
    { label: 'Hard Break', action: () => editor.chain().focus().setHardBreak().run() },
    { label: 'Undo', action: () => editor.chain().focus().undo().run(), disabled: !editor.can().chain().focus().undo().run() },
    { label: 'Redo', action: () => editor.chain().focus().redo().run(), disabled: !editor.can().chain().focus().redo().run() },
    { label: 'Purple', action: () => editor.chain().focus().setColor('#958DF1').run(), active: editor.isActive('textStyle', { color: '#958DF1' }) },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4 bg-slate-200 dark:bg-slate-800 p-3 rounded shadow-sm">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          onClick={btn.action}
          disabled={btn.disabled}
          className={`text-sm px-3 py-1 rounded border 
            ${btn.active ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-700 dark:text-white text-gray-800'}
            hover:bg-blue-500 hover:text-white transition disabled:opacity-50`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default MenuBar;
