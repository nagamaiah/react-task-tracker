import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, isShowContent, content, onAddClick, addCloseText}) => {

    return (
        <>
            <header className="header">
                <h1>{title}</h1>
                { isShowContent && <p>{content}</p>}
                <Button 
                    btnClickEvent={onAddClick} 
                    color={addCloseText? 'red':'green'}
                    text={addCloseText? 'Close':'Add'}/>
            </header>
        </>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    isShowContent: false,
    content: 'Header content goes here...'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    isShowContent: PropTypes.bool,
    content: PropTypes.string
}


export default Header;