import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Bold, Italic, ItalicUI } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Link } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Button, Stack } from "@chakra-ui/react";

const editorConfiguration = {
  plugins: [
    Essentials,
    Bold,
    Italic,
    Paragraph,
    ItalicUI,
    BlockQuote,
    Heading,
    Link,
    List,
    Autoformat,
  ],
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
    "undo",
    "redo",
  ],
};

const Editor = ({ buttonText, submittingButtonText, loading, setValue }) => {
  return (
    <Stack>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
        // onReady={(editor) => {
        //   console.log("Editor is ready to use!");
        // }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
      <Button
        colorScheme="teal"
        type="submit"
        onClick={() => {
          console.log("clicked");
        }}
        size="md"
        variant="outline"
        isLoading={loading}
        loadingText={submittingButtonText}
      >
        {buttonText}
      </Button>
    </Stack>
  );
};

export default Editor;
