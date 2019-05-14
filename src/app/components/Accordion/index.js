import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Button, Fade} from "reactstrap";
import { toggleAccordionAction} from "../../store/actions/accordion";
import { connect } from "react-redux";

class AccordionComponent extends React.Component {

    onClickAccordion = () =>{
        this.props.onToggleAccordion();
    }
     render() {
        const titleClass = this.props.accordionState.isOpen? "openAccordion" : "closeAccordion";
      return (
          <div>
            <Button
            onClick={this.onClickAccordion}>
              Accordion
            </Button>
            <Fade>
              <div id="fade-text" className={titleClass}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Fade>
          </div>
        );
      }
}
const mapStateToProps = state => ({
    accordionState: state.accordion,

 });
 const mapDispatchToProps = dispatch => ({
   onToggleAccordion: () => dispatch(toggleAccordionAction()),
 });

 export const Accordion = connect(
   mapStateToProps,
   mapDispatchToProps
 )(AccordionComponent);