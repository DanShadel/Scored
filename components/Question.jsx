import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getRandomChord, getRangeByClef, getTriad, pickOne } from '../helpers/helpers';
import { bassRange, chromaticScale, chromaticScaleAllVariations, CMaj, trebleRange, scaleList, clefs, allScales } from '../constants/musicConstants';
import Staff from './Staff';
import { Note } from '../helpers/Note';
import TitleButton from './TitleButton';
import AnswerButton from './AnswerButton';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import { getClef } from '../helpers/selectors';
import StaffControls from './StaffControls';
import { Scale } from 'tonal';

const Question = ({ navigation }) => {

	const [clef, setClef] = React.useState('treble')
	const [notes, setNotes] = React.useState([]);
	const [displayAnswer, setDisplayAnswer] = React.useState(false);
	const [answer, setAnswer] = React.useState('');
	const [answerChoices, setAnswerChoices] = React.useState([]);
	const [answeredCorrectly, setAnsweredCorrectly] = React.useState(false);

	const generateNote = () => {
		const newClef = pickOne(clefs)
		setDisplayAnswer(false);
		setClef(newClef);
		const range = getRangeByClef(newClef);
		const note1 = new Note(pickOne(Scale.get('B chromatic').notes), pickOne(range)); // currently displays accidentals as sharps
		setNotes([note1]);
		setAnswer(note1.name);
		setAnswerChoices(generateNoteAnswerChoices(note1.name));
		console.log(answerChoices);
	};

	const generateChord = () => {
		const newClef = pickOne(clefs)
		setClef(newClef);
		const { name, scale } = getRandomChord();
		setDisplayAnswer(false);
		const triad = getTriad(scale);
		const range = getRangeByClef(newClef);
		const position = pickOne(range); //make all notes the same range
		const chord = triad.map(note => new Note(note, position));

		setNotes(chord);
		setAnswer(name);
		setAnswerChoices(generateChordAnswerChoices(name))
		console.log(answerChoices);
	};

	const generateNoteAnswerChoices = (correctAnswer) => {
		let answers = [correctAnswer];

		for (let i = 0; i < 3; i++) {
			let nextAnswer = pickOne(Scale.get('B chromatic').notes);
			while (nextAnswer === correctAnswer || answers.includes(nextAnswer)) {
				nextAnswer = pickOne(Scale.get('B chromatic').notes);
			}
			answers.push(nextAnswer)
		};
		return answers.sort((a, b) => 0.5 - Math.random());

	}

	const generateChordAnswerChoices = (correctAnswer) => {
		let answers = [correctAnswer];

		for (let i = 0; i < 3; i++) {
			let nextAnswer = pickOne(allScales);
			while (nextAnswer === correctAnswer) {
				nextAnswer = pickOne(allScales);
			}
			answers.push(nextAnswer)
		};
		return answers.sort((a, b) => 0.5 - Math.random());

	}

	React.useEffect(() => {
		generateNote();
	}, []);

	const getAnswerText = () => {
		if (!displayAnswer) {
			return 'What is this?'
		}

		if (answeredCorrectly) {
			return 'Nice!'
		}

		return 'Uh oh..'
	}

	const onPress = (selection) => {
		console.log('onPress')
		answer === selection ? setAnsweredCorrectly(true) : setAnsweredCorrectly(false)
		setDisplayAnswer(true);
	}

	return (
		<View style={styles.container}>

			<View style={styles.progressBar}>
				<ProgressBar />
			</View>

			{notes.length > 0 ? <View style={styles.staff}><Staff notes={notes} clef={clef} beats={1} /></View> : <></>}

			<View style={styles.bottomContainer}>
				<View style={styles.answerTextContainer}>
					<Text style={styles.answerText}>
						{getAnswerText()}
					</Text>
				</View>

				<View style={styles.buttonContainer}>
					<View style={styles.rowContainer}>
						<AnswerButton onPress={() => onPress(answerChoices[0])} answerChoice={answerChoices[0]} showAnswer={displayAnswer} correct={answerChoices[0] === answer} />
						<AnswerButton onPress={() => onPress(answerChoices[1])} answerChoice={answerChoices[1]} showAnswer={displayAnswer} correct={answerChoices[1] === answer} />
					</View>
					<View style={styles.rowContainer}>
						<AnswerButton onPress={() => onPress(answerChoices[2])} answerChoice={answerChoices[2]} showAnswer={displayAnswer} correct={answerChoices[2] === answer} />
						<AnswerButton onPress={() => onPress(answerChoices[3])} answerChoice={answerChoices[3]} showAnswer={displayAnswer} correct={answerChoices[3] === answer} />
					</View>
				</View>

				<View style={styles.rowContainer}>
					{displayAnswer ?
						<>
							<TitleButton title="New Note" onPress={() => generateNote()} />
							<TitleButton title="New Chord" onPress={() => generateChord()} />
						</>
						:
						<View>
						</View>
					}
				</View>
			</View>
		</View >
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	answerTextContainer: {
		flex: 1
	},
	answerText: {
		marginTop: 64,
		fontSize: 32,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'black',
		fontFamily: 'Darwin'
	},
	bottomContainer: {
		flex: 5,
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
	},
	staff: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 64
	},
	rowContainer: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 2,
		width: '80%',
	},
	progressBar: {
		flex: .25,
		marginTop: 16
	}

});

export default Question;