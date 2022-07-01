
import { CancionEntity } from 'src/cancion/entities/cancion.entity';
import { InterpreteEntity } from 'src/interprete/entities/interprete.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity('albums')
export class AlbumEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'id_interprete' })
  idInterprete: number;

  @Column()
  nombre: string;

  @Column({ name: 'fecha_lanzamiento' })
  fechaLanzamiento: Date;

  @ManyToOne(() => InterpreteEntity, interprete => interprete.albums)
  @JoinColumn({ name: 'id_interprete' })
  interprete: InterpreteEntity;

  @OneToMany(() => CancionEntity, cancion => cancion.album)
  canciones: CancionEntity[];
}
