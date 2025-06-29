import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { Class } from '~/domain/class/class'

type Props = {
  classes: Class[]
}
export const ClassList = ({ classes }: Props) => {
  return (
    <FlatList
      data={classes}
      keyExtractor={(item) => item.id.value.toString()}
      renderItem={({ item }) => {
        const parsedDate = item.date.toLocaleDateString("es-ES")
        return (
          <Link href={{
            pathname: '/class/[id]/details',
            params: { id: item.id.value.toString() }
          }} asChild>

            <Pressable android_ripple={{ color: "#ddd" }} className="gap-4 py-2 border-b border-neutral-200 flex-row items-center justify-between px-6">
              <View className='flex-1 gap-1'>
                <Text className="text-lg font-semibold">{item.topic}</Text>
                <Text className='line-clamp-3'>{item.notes}</Text>
              </View>
              <View>

                <Text className="text-sm text-neutral-500">{parsedDate}</Text>
                <Text className="text-sm text-neutral-500">{item.durationMinutes} minutos</Text>
                <Text className="text-sm text-neutral-500">{item.price?.value}€</Text>
                {item.isPaid ? (
                  <Text className="text-sm text-green-500">Paid</Text>
                ) : (
                  <Text className="text-sm text-red-500">
                    Not paid
                  </Text>
                )}
              </View>
            </Pressable>

          </Link>
        )
      }}
    />
  )
}

