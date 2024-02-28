import { Test, TestingModule } from '@nestjs/testing';
import { FamilleProduitController } from './famille-produit.controller';

describe('FamilleProduitController', () => {
  let controller: FamilleProduitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilleProduitController],
    }).compile();

    controller = module.get<FamilleProduitController>(FamilleProduitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
