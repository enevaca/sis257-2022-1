import { IsNotEmpty } from "class-validator";

export class CreateInterpreteDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  nacionalidad: string;
}
