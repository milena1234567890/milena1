const BACKGROUD_COLOR = "#E9CFEC";
const WORD_COLOR = "#ffffff";
const LETTER_SIZE = 16;

const WORDS = ["joyka", "alluring","malicious"] //"attractive", "beauteous", "becoming","bewitching","comely","dazzling","enticing","exquisite","fetching","fine","good-looking","gorgeous", "graceful","handsome", "knockout", "lovely","magnificent","marvelous","radiant","ravishing","resplendent","statuesque","stunning","sublime"];

const WORD_SPEED = 0.5;

const MAX_LETTER_COUNT = 10;
const MAX_WORD_SIZE = LETTER_SIZE * MAX_LETTER_COUNT;
const MAX_WORD_X = window.innerWidth - MAX_WORD_SIZE;
const INITIAL_SPAWNING_INTERVAL = 1000; // 1s
const SPAWNING_INTERVAL_ACCELERATION = 100; // 0.1s
const MIN_SPAWNING_INTERVAL = 600; // 0.4s

const MAX_ROUNDS = 2;


