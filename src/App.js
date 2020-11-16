import "./App.css";
import React, { useState } from "react";
import Markdown from "react-remarkable";
const MarkdownEditor = () => {
	const [markdownText, setMarkdownText] = useState("");

	return (
		<div className="MarkdownEditor">
			<h3>Input</h3>
			<label>Enter some markdown</label>
			<textarea
				onChange={(e) => setMarkdownText(e.target.value)}
				defaultValue={markdownText}
			/>
			<h3>Output</h3>
			<Markdown>{`${markdownText}`}</Markdown>
		</div>
	);
};

export default MarkdownEditor;
