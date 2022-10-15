import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MgidWidget = (props) => {
  const {
    id = '',
    src = '',
  } = props;

  return (
    <div>
      <div id={id} />
      <Helmet>
        <script src={src}  async/>
      </Helmet>
    </div>
  );
};

MgidWidget.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export { MgidWidget };