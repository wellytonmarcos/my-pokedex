// Helper para mapear nomes de tipos para ícones

import bug from "../assets/icons/types/bug.png";
import dark from "../assets/icons/types/dark.png";
import dragon from "../assets/icons/types/dragon.png";
import eletric from "../assets/icons/types/eletric.png";
import fairy from "../assets/icons/types/fairy.png";
import fighting from "../assets/icons/types/fighting.png";
import fire from "../assets/icons/types/fire.png";
import flying from "../assets/icons/types/flying.png";
import ghost from "../assets/icons/types/ghost.png";
import grass from "../assets/icons/types/grass.png";
import ground from "../assets/icons/types/ground.png";
import ice from "../assets/icons/types/ice.png";
import normal from "../assets/icons/types/normal.png";
import poison from "../assets/icons/types/poison.png";
import psichic from "../assets/icons/types/psichic.png";
import rock from "../assets/icons/types/rock.png";
import steel from "../assets/icons/types/steel.png";
import water from "../assets/icons/types/water.png";

const typeIcons = {
  bug,
  dark,
  dragon,
  eletric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psichic,
  rock,
  steel,
  water,
};

export function getTypeIcon(typeName) {
  return typeIcons[typeName] || null;
}

export default typeIcons;
