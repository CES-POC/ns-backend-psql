/*
  Warnings:

  - Added the required column `PlantFloorDrawing_id` to the `plant_floor_drawing_engineering_object` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plant_floor_drawing_engineering_object" ADD COLUMN     "PlantFloorDrawing_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "plant_floor_drawing_engineering_object" ADD CONSTRAINT "plant_floor_drawing_engineering_object_PlantFloorDrawing_i_fkey" FOREIGN KEY ("PlantFloorDrawing_id") REFERENCES "plant_floor_drawing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
