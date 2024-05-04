import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  otherStyles,
  handleChangeText,
  ...rest
}) => {
  const [showPassword, setSowPassword] = useState(false);

  return (
    <View className="w-full h-16 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary px-4 items-center flex-row">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholder="Search for a video topic"
        value={value}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image className="w-5 h-5" resizeMode="contain" source={icons.search} />
      </TouchableOpacity>
    </View>
  );
};
export default SearchInput;
