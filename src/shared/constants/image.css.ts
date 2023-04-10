const TITLE_SIZE = 50
const LINE_HEIGHT = 1.5

const styles: Record<string, Styles> = {
  container: {
    position: 'relative',
    backgroundColor: '#06080c',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '50px',
  },
  title: {
    fontSize: TITLE_SIZE,
    display: 'flex',
    flexDirection: 'column',
    textOverflow: 'ellipsis',
    color: 'white',
    fontWeight: 600,
    lineHeight: LINE_HEIGHT,
  },
  backdrop: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: '-1',
  },
  before: {
    position: 'absolute',
    zIndex: '-2',
    width: '200px',
    height: '200px',
    backgroundColor: '#2563eb1a',
    filter: 'blur(100px)',
    top: 200,
    left: '50px'
  },
  after: {
    position: 'absolute',
    zIndex: '-2',
    width: '200px',
    height: '200px',
    backgroundColor: '#2563eb1a',
    filter: 'blur(100px)',
    bottom: 200,
    right: '50px'
  }
}

export default styles