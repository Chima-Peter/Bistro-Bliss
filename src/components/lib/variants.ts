export const container = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}


export const fadeUp = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

export const bounceTransition = {
    type: "spring",
    stiffness: 50, // Strength of the spring (higher = snappier)
    damping: 10,    // Lower = more bounce
    mass: 0.5,      // Simulates object weight (lower = faster bounce)
    duration: 0.5
  }