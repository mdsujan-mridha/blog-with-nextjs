'use client';

import "katex/dist/katex.min.css";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import Placeholder from "@tiptap/extension-placeholder";



const TiptapEditor = ({ content, onChange }) => {
   

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Image,
            Placeholder.configure({
                placeholder: 'Write something awesome...',
                showOnlyWhenEditable: true,
                showOnlyCurrent: true,
                editorProps: {
                    attributes: {
                        class: 'text-gray-500 italic',
                    },
                },
            })
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
     

    })

    return (
        <div className='border rounded bg-white text-black p-2  overflow-y-auto '>
            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;