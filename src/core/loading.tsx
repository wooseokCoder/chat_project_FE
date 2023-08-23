import { Transition } from "framer";
import { motion } from "framer-motion";
import {useState,useEffect} from "react";

interface loadingPoisition {
    position:string,
    top?:string,
    bottom?:string,
    zIndex?: number,
    left?:string,
    right?:string
}

const LoadingDot = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "grey",
  borderRadius: "50%"
};

const LoadingContainer = {
  width: "10rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around"
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DotVariants = {
  initial: {
    y: "0%"
  },
  animate: {
    y: "100%"
  }
};

const DotTransition = {
  duration: 0.5,
  repeatType: 'mirror',
  repeat: Infinity,
  ease: "easeInOut",
};

const divStype = {
    paddingTop: "5rem",
    width: "85px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const ChatLoading = ({ldPosition}:{ldPosition?:loadingPoisition}) => {

    return (
      <div style={{zIndex:"1",position:"relative"}}>
        <div
            style={Object.assign(divStype,ldPosition) as React.CSSProperties}
        >
            <motion.div
            style={LoadingContainer}
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
            >
            <motion.span
                style={LoadingDot}
                variants={DotVariants}
                transition={DotTransition as Transition} 
            />
            <motion.span
                style={LoadingDot}
                variants={DotVariants}
                transition={DotTransition as Transition}
            />
            <motion.span
                style={LoadingDot}
                variants={DotVariants}
                transition={DotTransition as Transition}
            />
            </motion.div>
        </div>
      </div>
    );
  }

export default ChatLoading;
