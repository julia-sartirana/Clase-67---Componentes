const root = document.getElementById('root')
const e = React.createElement



const SayHi = () => {
  return e('p', null, 'Hello,')
}
const Title = () => {
  return e('h1', null, 'Samuel')
}
const UserImg = () => {
  return e('img')
}

const UserDescription = () => {
  return e('div', null, [e(SayHi), e(Title), e(UserImg)])
}

const text = () => {
  return e('p', null, 'What do you want to learn today?')
}
const button = () => {
  return e('button', null, 'Get Started')
}
const CardImg = () => {
  return e('img')
}

const Card = () => {
  return e('div', null, [e(text), e(button), e(CardImg)])
}

const Subtitle = () => {
  return e('h3', null, 'Last Seen Courses' )
}
// const Search = () => {
//   return e('input', null, 'Search')
// }
const Description = () => {
  return e('p', null, 'Basic PHP')
}
const Time = () => {
  return e('small', null, '1 hours, 20 min')
}
const PlayButton = () => {
  return e('button', null, 'Play')
}
const CourseImg = () => {
  return e('img')
}
const CoursesCard = () => {
  return e('div', null, [e(Description), e(Time), e(PlayButton), e(CourseImg)])
}

const App = () => {
  return e('main', null, [e(UserDescription), e(Card), e(CoursesCard)])
}
// console.log(CoursesCard)

// console.log(e(UserDescription))

ReactDOM.render(e(App), root)