import { Test, TestingModule } from '@nestjs/testing';
import { familleProduitService } from './famille-produit.service';

describe('FamilleProduitService', () => {
  let service: familleProduitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [familleProduitService],
    }).compile();

    service = module.get<familleProduitService>(familleProduitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
