import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { StyledText } from "./common/components/StyledComponents"
const TestDragPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
        },
      })
      const onSubmit = (data) => console.log(data)
    
    
      return (
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>}
    
    
          <Controller
            control={control}
            rules={{
                required:true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <StyledText
                placeholder="Last name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
    {errors.lastName && <Text>This is required.</Text>}
    
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      )
}

export default TestDragPage



