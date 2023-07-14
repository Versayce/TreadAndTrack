import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react"

const TextEditor = ( props ) => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        };
    };
    const {
        handleFocus,
        handleBlur,
        onChange, 
        value, 
        placeholder,
    } = props;

    return (
        <Editor 
            apiKey="0odlwwnxu0rcj0rpw4zx4vdpztu7bvb36smfhl44l4lhdlsq"
            onInit={(e, editor) => editorRef.current = editor}
            init={{
                width: "93%",
                menuBar: false,
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            // initialValue={placeholder}
            value={value}
            onEditorChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
};

export default TextEditor;
