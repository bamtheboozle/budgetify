import React from "react";
import { AntDesign, Fontisto, MaterialIcons } from "@expo/vector-icons";

import { CATEGORY } from "../../types/TransactionTypes";
import normalize from "../../utils/fontSizeUtils";

const CATEGORY_TO_ANT_ICON = {
  [CATEGORY.Car]: "car",
  [CATEGORY.Health]: "hearto",
  [CATEGORY.Groceries]: "shoppingcart",
};
const CATEGORY_TO_FONTISTO_ICON = {
  [CATEGORY.Transport]: "subway",
};
const CATEGORY_TO_MATERIAL_ICONS = {
  [CATEGORY.Subscriptions]: "subscriptions",
};

const ANTcategories = [CATEGORY.Car, CATEGORY.Health, CATEGORY.Groceries];
const FontistoCategories = [CATEGORY.Transport];
const MaterialIconsCategories = [CATEGORY.Subscriptions];

const TransactionIcon = ({ category, colour }) => {
  return (
    <>
      {ANTcategories.includes(category) && (
        <AntDesign
          name={CATEGORY_TO_ANT_ICON[category]}
          size={normalize(18)}
          color={colour}
        />
      )}
      {FontistoCategories.includes(category) && (
        <Fontisto
          name={CATEGORY_TO_FONTISTO_ICON[category]}
          size={normalize(18)}
          color={colour}
        />
      )}
      {MaterialIconsCategories.includes(category) && (
        <MaterialIcons
          name={CATEGORY_TO_MATERIAL_ICONS[category]}
          size={normalize(16)}
          color={colour}
        />
      )}
    </>
  );
};

export default TransactionIcon;
