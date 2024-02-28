import { Test, TestingModule } from '@nestjs/testing';
import { sousCategoriesService } from './sous-categorie.service';

describe('sousCategoriesService', () => {
  let service: sousCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [sousCategoriesService],
    }).compile();

    service = module.get<sousCategoriesService>(sousCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
