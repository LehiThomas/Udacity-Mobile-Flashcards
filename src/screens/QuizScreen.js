import React, { Component } from "react";
import { View, Text } from "react-native";

import StandardButton from "../components/StandardButton";
import Results from "../components/Results";

class QuizScreen extends Component {
  constructor() {
    super();

    this.initialState = {
      showAnswer: false,
      score: 0,
      questionIndex: 0
    };

    this.state = this.initialState;
  }

  setScore = point => {
    this.setState({
      score: this.state.score + point,
      questionIndex: this.state.questionIndex + 1,
      showAnswer: false
    });
  };

  showAnswer = () => {
    this.setState({
      showAnswer: this.state.showAnswer ? false : true
    });
  };

  restartQuiz = () => {
    this.setState(this.initialState);
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { deck } = this.props.navigation.state.params;
    const questions = deck.questions;
    return (
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: "center"
        }}
      >
        {this.state.questionIndex < questions.length ? (
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 60
            }}
          >
            <View style={{ height: 15, position: "absolute", left: 0, top: 0 }}>
              <Text style={{ fontSize: 20 }}>
                Question: 1/{questions.length}
              </Text>
            </View>
            {!this.state.showAnswer && (
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "grey", fontSize: 40 }}>
                  {questions[this.state.questionIndex].question}
                </Text>
                <StandardButton
                  pressMe={() => this.showAnswer()}
                  buttonText="ANSWER"
                />
              </View>
            )}
            {this.state.showAnswer && (
              <View style={{}}>
                <Text style={{ color: "grey", fontSize: 40 }}>Answer:</Text>
                <Text style={{ color: "grey", fontSize: 30 }}>
                  {questions[this.state.questionIndex].answer}
                </Text>

                <StandardButton
                  pressMe={() => this.showAnswer()}
                  buttonText="QUESTION"
                />
              </View>
            )}
            <View style={{ position: "absolute", bottom: 50 }}>
              <StandardButton
                pressMe={() => this.setScore(1)}
                buttonText="CORRECT"
              />
              <StandardButton
                pressMe={() => this.setScore(0)}
                buttonText="INCORRECT"
              />
            </View>
          </View>
        ) : (
          <Results
            goBack={this.goBack}
            restartQuiz={this.restartQuiz}
            score={this.state.score}
            questionCount={questions.length}
          />
        )}
      </View>
    );
  }
}

export default QuizScreen;
