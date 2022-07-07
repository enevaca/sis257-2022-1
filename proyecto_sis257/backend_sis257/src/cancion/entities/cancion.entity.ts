import { AlbumEntity } from 'src/album/entities/album.entity';
import { GeneroEntity } from 'src/genero/entities/genero.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('canciones')
export class CancionEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'id_album' }) idAlbum: number;

  @Column({ name: 'id_genero' }) idGenero: number;

  @Column() nombre: string;

  @Column() duracion: string;

  @Column() tags: string;

  @Column() url: string;

  @ManyToOne(() => AlbumEntity, album => album.canciones)
  @JoinColumn({ name: 'id_album' })
  album: AlbumEntity;

  @ManyToOne(() => GeneroEntity, genero => genero.canciones)
  @JoinColumn({ name: 'id_genero' })
  genero: GeneroEntity;
}
