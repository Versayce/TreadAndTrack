import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react"
import Spinner from "../Spinner/Spinner";

const TextEditor = ( props ) => {
    const [editorLoading, setEditorLoading] = useState(true);
    const editorRef = useRef(null);

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        };
    };

    const handleEditorInit = () => {
        setEditorLoading(false);
    };

    const {
        handleFocus,
        onBlur: handleBlur,
        onChange, 
        value, 
        placeholder,
    } = props;

    return (
        <>
            {editorLoading ?? <Spinner/>}
            <Editor 
                apiKey="0odlwwnxu0rcj0rpw4zx4vdpztu7bvb36smfhl44l4lhdlsq"
                onInit={(e, editor) => {
                    handleEditorInit();
                    editorRef.current = editor
                }}
                init={{
                    width: "92%",
                    menuBar: false,
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    menubar: 'file edit view insert format tools table',
                    plugins: 'autolink lists link image charmap print preview anchor table wordcount',
                    toolbar: 'undo redo | blocks | bold italic | forecolor backcolor | alignleft aligncenter alignright |'
                           + 'bullist numlist | outdent indent | table tabledelete | link image'
                           + 'wordcount',
                    lists_indent_on_tab: true,
                }}
                initialValue={placeholder}
                value={value}
                onEditorChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </>
    );
};

export default TextEditor;
