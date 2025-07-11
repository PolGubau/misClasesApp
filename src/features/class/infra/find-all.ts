import { db } from "db/utils"
import { ClassRepository } from "~/domain/class/class-repository"
import { classEntitiesToPrimitivesMapper } from "./mappers/entity-to-primitive"


export const findAllClassesQuery = db.query["classesTable"].findMany({
  orderBy(classes, { desc }) {
    return [desc(classes.date)]
  },
})



export const findAllClasses: ClassRepository["findAll"] = async () => {
  const result = await findAllClassesQuery
  return classEntitiesToPrimitivesMapper(result)
}