-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "empid" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plantlocation" (
    "id" TEXT NOT NULL,
    "plant_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "floor" TEXT NOT NULL,
    "area" TEXT NOT NULL,

    CONSTRAINT "plantlocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "engineering_object" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "shape" INTEGER NOT NULL,
    "dataformjson" TEXT NOT NULL,

    CONSTRAINT "engineering_object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_floor_drawing" (
    "id" TEXT NOT NULL,
    "plantlocation_id" TEXT NOT NULL,

    CONSTRAINT "plant_floor_drawing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_floor_drawing_engineering_object" (
    "id" TEXT NOT NULL,
    "componentjson" TEXT NOT NULL,
    "dataFormJsonValues" TEXT NOT NULL,

    CONSTRAINT "plant_floor_drawing_engineering_object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_floor_drawing_engineering_object_history" (
    "id" TEXT NOT NULL,
    "componentjson" TEXT NOT NULL,
    "dataFormJsonValues" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "plant_floor_drawing_engineering_object_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_floor_drawing_arrows" (
    "id" TEXT NOT NULL,
    "arrowjson" TEXT NOT NULL,

    CONSTRAINT "plant_floor_drawing_arrows_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_empid_key" ON "user"("empid");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_id_key" ON "RefreshToken"("id");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant_floor_drawing" ADD CONSTRAINT "plant_floor_drawing_plantlocation_id_fkey" FOREIGN KEY ("plantlocation_id") REFERENCES "plantlocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
