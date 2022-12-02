import { Form, Button } from "react-bootstrap";
import sendImage from "../../../img/send-icon.png";
import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function Footer(props) {
  /* 서밋하면 인풋란에 입력한 값 사라지게 하기 (딜레이걸어서해결함 딜레이안걸면 서밋하자마자 사라져서 
    값 전달 안됨)*/
  function inputClear() {
    setTimeout(function() {
      setinputform("");
    }, 10);
  }

  function outputCreate() {
    /* output */
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: document.querySelector(".input-form").value,
        //prompt: document.querySelector("#input").value, //유저인풋
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((result) => {
        console.log(result.data.choices[0].text);
        props.setMessage(result.data.choices[0].text, false);
      });
  }

  /*  */
  const [inputform, setinputform] = useState("");
  const handleChange = ({ target: { value } }) => setinputform(value);

  /* 인풋버블에넣기 */
  const handleSubmit = (event) => {
    /* 라우트이동방지 */
    event.preventDefault();
    /* 인풋 */
    props.setMessage(inputform, true);
    outputCreate();
    //alert(`변경된 패스워드: ${inputform}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <footer>
        <Form.Control
          onChange={handleChange}
          type="inputform"
          name="inputform"
          value={inputform}
          placeholder=" 무엇이든 물어보세요."
          className="input-form"
        />
        <Button
          variant="#fff"
          type="submit"
          className="input-button"
          onClick={inputClear}
        >
          <img className="send-icon" src={sendImage} />
        </Button>
      </footer>
    </Form>
  );
}
export default Footer;
