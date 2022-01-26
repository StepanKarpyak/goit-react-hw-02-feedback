import React from 'react';
import PropTypes from 'prop-types';
import { StyleSection } from './Section.styled';

const Section = ({title, children}) => (
    <>
        <StyleSection>{title}</StyleSection>
        {children}
    </>
)

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
