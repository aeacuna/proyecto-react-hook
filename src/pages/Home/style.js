import { makeStyles } from '@material-ui/styles'

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justityContent: 'center'
}

export default makeStyles ({
    container : {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centeredStyleObj
    },
    title: {
        fontSize: '4rem'
    },
    tittleGridContainer: {
        ...centeredStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    searchBUtton: {
      marginLeft: '.5rem'  
    },
    buttonContainer: {
        marginTop: '.5rem'
    },
    movieIcon: {
      fontSize: '4rem'  
    }
}); 