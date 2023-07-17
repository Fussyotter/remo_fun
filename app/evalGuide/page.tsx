import { Fragment } from 'react';

const EvaluationGuide = () => {
    return (
        <Fragment>
            <h1>Evaluation Guide for AI Model Responses</h1>
            <p>Follow this step-by-step guide to generate and evaluate structured responses:</p>
            <h2>Workflow</h2>
            <ol>
                <li>Familiarize yourself with the Correctness Guide.</li>
                <li>Generate a response based on the provided prompt.</li>
                <li>Write a comment justifying your response.</li>
                <li>Review and submit your response.</li>
            </ol>
            
            <h2>Correctness Guide</h2>
            <p>Use this guide to classify your response as Completely Correct, Partially Correct, or Incorrect:</p>
            <ul>
                <li><strong>Completely Correct:</strong> Your response should be error-free and successfully address the prompt.</li>
                <li><strong>Partially Correct:</strong> Your response could be useful despite having errors.</li>
                <li><strong>Incorrect:</strong> Your response does not meet the desired output or is unrelated to the prompt.</li>
            </ul>
            
            <h2>Code Evaluation Criteria</h2>
            <p>Consider the following aspects in your code:</p>
            <ul>
                <li><strong>Code Generation:</strong> Evaluate the overall quality of your code. It should be correct in terms of functionality, syntax, and semantics.</li>
                <li><strong>Code Explanation:</strong> Provide clear and coherent explanations about your code.</li>
                <li><strong>Code Commenting:</strong> Include comments within your code to clarify complex sections and improve understanding.</li>
            </ul>

            <h2>Commenting Guide</h2>
            <p>When writing your comment:</p>
            <ul>
                <li>Make it evident why you chose your response.</li>
                <li>Explain why your response is effective or ineffective.</li>
                <li>Provide reasoning for your choices.</li>
            </ul>

            <h2>Review and Submit</h2>
            <p>Before you submit your response:</p>
            <ul>
                <li>Ensure that you understand the prompt.</li>
                <li>Verify the accuracy of your response.</li>
                <li>Make sure your explanations and comments are grammatically and semantically correct.</li>
                <li>Review your response and make sure it aligns with the Correctness Guide.</li>
            </ul>
        </Fragment>
    );
}

export default EvaluationGuide;
