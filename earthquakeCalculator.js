function earthquakeImpact(intensity) {
    if (intensity < 5) {
        return "little or no damage";
    }
    if (intensity < 5.5) {
        return "some damage";
    }
    if (intensity < 6.5) {
        return "serious damage: walls may crack or fall";
    }
    if (intensity < 7.5) {
        return "disaster: buildings may collapse";
    }
    if (intensity >= 7.5) {
        return "catastrophe: most buildings destroyed"
    }

}

console.log(earthquakeImpact(4.3)); // little or no damage
console.log(earthquakeImpact(5.3)); // some damage
console.log(earthquakeImpact(5.8)); // serious damage: walls may crack or fall
console.log(earthquakeImpact(6.7)); // disaster: buildings may collapse
console.log(earthquakeImpact(9.5)); // catastrophe: most buildings destroyed

export {earthquakeImpact}