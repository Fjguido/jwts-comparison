import { Fragment} from 'react';
import PropTypes from 'prop-types';

import './imageStyle.css';

const Image = ({url, title = ''}) => (
    <>
        <img className="comparing-image" src={url} alt={title} />
        {!!title && <span className="cd-image-label" data-type="modified">{title}</span>}
    </>
    
);

Image.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string
}

Image.defaultProps = {
    title: ''
}

export default Image;