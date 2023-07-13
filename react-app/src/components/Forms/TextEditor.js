import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react"

const TextEditor = ({ placeholder, value, onChange }) => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <Editor 
            apiKey="0odlwwnxu0rcj0rpw4zx4vdpztu7bvb36smfhl44l4lhdlsq"
            onInit={(e, editor) => editorRef.current = editor}
            init={{
                width: "95%",
                menuBar: false,
                plugins: [
                    'quickbars',
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            initialValue={placeholder}
            value={value}
            onEditorChange={onChange}
        />
    );
};

export default TextEditor;
