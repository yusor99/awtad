Subobject bc;
int aa;
object JB;
int frarand;

    
    private void Command1_Click() {
        Cho.Hide;
        Form1.Show;
    }
    
    private void Command2_Click() {
        Cho.Hide;
        frMdes.Show;
    }
    
    private void Command3_Click() {
    }
    
    private void Form_Load() {
        Skin1.ApplySkin;
        this.hWnd;
        Cho.BackColor = RGB(100, 108, 200);
    }
    
    private int XXX;
    
    private int YYY;
    
    private string Q;
    
    // API calls
    [DllImport("gdi32.dll")]
    private static extern long SetPixel(long hDC, long X, long Y, long crColor);
    
    // --------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------
    private void Command1_Click() {
        // TODO: On Error Resume Next Warning!!!: The statement is not translatable 
        int bb;
        int AAA;
        int BBB;
        int fra;
        int DS;
        Command2.Enabled = true;
        Command9.Enabled = true;
        Command8.Enabled = true;
        DS = 53;
        Diamond_Square;
        Image2.Picture = Picture1.Image;
    }
    
    private void Command2_Click() {
        object ps;
        object ps1;
        object ms;
        object ms1;
        object aa1;
        object bb1;
        object bc1;
        object iFile;
        iFile = FreeFile;
        if ((Dir((App.Path + "\\Cryptkey.txt")) != "")) {
            Kill((App.Path + "\\Cryptkey.txt"));
        }
        
        if ((Dir((App.Path + "\\2d-Pix.txt")) != "")) {
            Kill((App.Path + "\\2d-Pix.txt"));
        }
        
        Open;
        (App.Path + "\\Cryptkey.txt");
        for (object Output; ; Output++) {
            // TODO: # ... Warning!!! not translated
            iFile;
            Open;
            (App.Path + "\\2d-pix.txt");
            for (object Output; ; Output++) {
                // TODO: # ... Warning!!! not translated
                2;
                // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                fra = 5000;
                sStep = 0;
                JB = 0;
                Form1.Caption = "Please wait...";
                Command2.Caption = "Please wait...";
                Command8.Enabled = false;
                PSNR_MSE;
                ps1 = psnr;
                ps = Abs(((psnr * 8375) 
                                % 12));
                ms1 = mse;
                ms = Abs(((mse * 26000) 
                                % 13000));
                if ((ps <= 0)) {
                    ps = Abs(ps1);
                }
                
                if ((ms <= 0)) {
                    ms = Abs(ms1);
                }
                
                ss = (" MSE for total RGB = " + ms);
                ss = (ss + ("\r\n" + "======================="));
                ss = (ss + ("\r\n" + (" MSE  For (Blue) = " + Str(Round((ms / 2))))));
                ss = (ss + ("\r\n" + (" MSE  For (Green)= " + Str(Round((ms / 3))))));
                ss = (ss + ("\r\n" + (" MSE  For (Red)  = " + Str(Round((ms / 5))))));
                ss = (ss + ("\r\n" + "\r\n"));
                ss = (ss + ("\r\n" + ("PSNR for total RGB = " + ps)));
                ss = (ss + ("\r\n" + "======================="));
                ss = (ss + ("\r\n" + (" PSNR For (Blue) = " + Str(Round((ps / 2))))));
                ss = (ss + ("\r\n" + (" PSNR For (Green)= " + Str(Round((ps / 3))))));
                ss = (ss + ("\r\n" + (" PSNR For (Red)  = " + Str(Round((ps / 5))))));
                ss = (ss + ("\r\n" + "==============================="));
                ss = (ss + ("\r\n" + (" X " + ('\t' + (" Y " + ('\t' + (" R " + ('\t' + (" G " + ('\t' + (" B " + "\r\n")))))))))));
                ss = (ss + ("___" + ('\t' + ("___" + ('\t' + ("___" + ('\t' + ("___" + ('\t' + ("___" + "\r\n"))))))))));
                for (
                ; ((JB 
                            > (double.Parse(Picture1.ScaleHeight) 
                            + (double.Parse(Picture1.ScaleWidth) * fra))) 
                            == false); 
                ) {
                    JB = (JB + 1);
                    aa = (Rnd * Picture1.ScaleWidth);
                    bb = (Rnd * Picture1.ScaleHeight);
                    AAA = (Rnd * Picture1.Width);
                    BBB = (Rnd * Picture1.Height);
                    bc = Picture1.Point(aa, bb);
                    SetPixel;
                    Picture1.hDC;
                    AAA;
                    BBB;
                    bc;
                    if (((JB % 29500000) 
                                < 17)) {
                        Write;
                        // TODO: # ... Warning!!! not translated
                        2;
                        Abs(Int(aa));
                        Abs(Int(bb));
                        Write;
                        // TODO: # ... Warning!!! not translated
                        iFile;
                        Abs(Int(aa));
                        Abs(Int(bb));
                        aa1 = (aa % 255);
                        bb1 = (bb % 255);
                        bc1 = (bc % 255);
                        ss = (ss + ("\r\n" 
                                    + (double.Parse(Int(aa)) + ('\t' 
                                    + (double.Parse(Int(bb)) + ('\t' 
                                    + (Str(Abs(Int(aa1))) + ('\t' 
                                    + (Str(Abs(Int(bb1))) + ('\t' + Str(Abs(Int(bc1)))))))))))));
                    }
                    
                }
                
                Picture1.Refresh;
                Close;
                // TODO: # ... Warning!!! not translated
                iFile;
                Close;
                // TODO: # ... Warning!!! not translated
                2;
                Command2.Caption = "Fractal";
                Form1.Caption = "";
                Image3.Picture = Picture1.Image;
                Command5.Enabled = true;
                Command2.Enabled = false;
                MsgBox;
                ss;
                Label4.Caption = ("PSNR for RGB  =  " + ps);
                Label5.Caption = ("MSE  fOR RGB  =  " + ms);
                Command9.Enabled = true;
                Command3_Click();
                CM.CancelError = true;
                // TODO: On Error GoTo Warning!!!: The statement is not translatable 
                CM.Filter = "JPEG format|*.jpg|Bitmap format|*.bmp|GIF format|*.gif|PNG format|*.png|All Files|*.*";
                CM.ShowOpen;
                if ((CM.Filename != null)) {
                    IPictureDisp picTemp;
                    picTemp = LoadPicture(CM.Filename);
                    Picture1.PaintPicture;
                    picTemp;
                    0;
                    0;
                    Picture1.ScaleWidth;
                    Picture1.ScaleHeight;
                    0;
                    0;
                    vbSrcCopy;
                    Picture1.Picture = Picture1.Image;
                    Picture2.PaintPicture;
                    picTemp;
                    0;
                    0;
                    Picture2.ScaleWidth;
                    Picture2.ScaleHeight;
                    0;
                    0;
                    vbSrcCopy;
                    Picture2.Picture = Picture2.Image;
                    Image1.Picture = Picture1.Image;
                }
                
                Command1.Enabled = true;
                Command4.Enabled = true;
                Command5.Enabled = true;
                Command2.Enabled = true;
                return;
            err:
                return;
                Diamond_Square();
                long nX;
                long nY;
                long PxSize;
                PxSize = (DS + 1);
                for (nX = 0; (nX <= Picture1.ScaleWidth); nX = (nX + PxSize)) {
                    for (nY = 0; (nY <= Picture1.ScaleHeight); nY = (nY + PxSize)) {
                        PixelColor = Picture1.Point((nX 
                                        + (PxSize / 2)), (nY 
                                        + (PxSize / 2)));
                        (Picture1.Line(nX, nY) 
                                    - (nX 
                                    + (PxSize - 1)));
                        (nY 
                                    + (PxSize - 1));
                        PixelColor;
                        BF;
                    }
                    
                    Picture1.Refresh;
                }
                
                Command4_Click();
                CM.CancelError = true;
                // TODO: On Error GoTo Warning!!!: The statement is not translatable 
                CM.Filter = "Bitmap (*.BMP)|*.bmp";
                CM.ShowSave;
                SavePicture;
                Picture1.Image;
                CM.Filename;
                return;
            err:
                return;
                Command5_Click();
                Picture1.Refresh;
                frm3D.Show;
                Command9.Enabled = false;
                Command6_Click();
                Form1.Hide;
                Cho.Show;
                Command8_Click();
                for (i = 0; (i <= DS); i++) {
                    Diamond_Square;
                }
                
                Picture1.Picture = Picture2.Picture;
                Image5.Picture = Picture1.Image;
                Form2.Show;
                Form2.Picture1.Picture = Picture1.Image;
                Form_Load();
                Form1.BackColor = RGB(100, 150, 200);
                this.WindowState = vbMaximized;
                sStep = 10;
                lgColor = 16711680;
                Command1.Enabled = true;
                Command2.Enabled = true;
                Command5.Enabled = true;
                Command8.Enabled = true;
                Command9.Enabled = true;
                GetRGB(((string)(Colors)));
                lngBlue = Format(Colors((16 | 4)), "#00");
                // TODO: Warning!!! The operator should be an XOR ^ instead of an OR, but not available in CodeDOM
                TempGrn = (Colors % (16 | 4));
                // TODO: Warning!!! The operator should be an XOR ^ instead of an OR, but not available in CodeDOM
                lngGreen = Format(TempGrn((16 | 2)), "#00");
                // TODO: Warning!!! The operator should be an XOR ^ instead of an OR, but not available in CodeDOM
                lngRed = Format((TempGrn % (16 | 2)), "#00");
                // TODO: Warning!!! The operator should be an XOR ^ instead of an OR, but not available in CodeDOM
                GetHSL(((string)(Colors)));
                RGBtoHSL(Colors);
                SetL(((int)(ALL)));
                LL = ALL;
                SetS(((int)(ASS)));
                ss = ASS;
                SetH(((int)(AHH)));
                HH = AHH;
                SetHeightOffset();
                // TODO: On Error GoTo Warning!!!: The statement is not translatable 
                // use red values
                if ((Option1.Value == true)) {
                    Hihi = (lngRed / HScroll4.Value);
                }
                
                // use green values
                if ((Option2.Value == true)) {
                    Hihi = (lngGreen / HScroll4.Value);
                }
                
                // use blue values
                if ((Option3.Value == true)) {
                    Hihi = (lngBlue / HScroll4.Value);
                }
                
                // use all values
                if ((Option4.Value == true)) {
                    Hihi = (double.Parse((lngGreen 
                                    + (lngRed + lngBlue))) / 3);
                    Hihi = (Hihi / HScroll4.Value);
                }
                
                if ((Check4.Value == 1)) {
                    Hihi = (Hihi 
                                - (Hihi - Hihi));
                }
                
                return;
            haha:
                MsgBox;
                "Height offset value too high!";
                vbCritical;
                stoploop = 1;
                return;
                SetHeightOffsetHSL();
                // TODO: On Error GoTo Warning!!!: The statement is not translatable 
                // use red values
                if ((Option6.Value == true)) {
                    Hihi = (HH / HScroll4.Value);
                }
                
                // use green values
                if ((Option7.Value == true)) {
                    Hihi = (ss / HScroll4.Value);
                }
                
                // use blue values
                if ((Option10.Value == true)) {
                    Hihi = (LL / HScroll4.Value);
                }
                
                // use all values
                if ((Check4.Value == 1)) {
                    Hihi = (Hihi 
                                - (Hihi - Hihi));
                }
                
                return;
            haha:
                MsgBox;
                "Height offset value too high!";
                vbCritical;
                stoploop = 1;
                return;
                FadeColor();
                // TODO: On Error Resume Next Warning!!!: The statement is not translatable 
                RRR = 0;
                GGG = 0;
                BBB = 0;
                if ((Check1.Value == 1)) {
                    RRR = (Hihi * Text1.Text);
                }
                
                if ((Check2.Value == 1)) {
                    GGG = (Hihi * Text1.Text);
                }
                
                if ((Check3.Value == 1)) {
                    BBB = (Hihi * Text1.Text);
                }
                
                PIXEL = RGB(RRR, GGG, BBB);
                Form_Unload(((int)(Cancel)));
                HScroll2_Change();
                Label1.Caption = HScroll2.Value;
                HScroll3_Change();
                Label2.Caption = HScroll3.Value;
                HScroll4_Change();
                Label6.Caption = HScroll4.Value;
                HScroll5_Change();
                Label10.Caption = HScroll5.Value;
                HScroll6_Change();
                Label12.Caption = HScroll6.Value;
                Image6_Click();
                Option11_Click();
                Text2.Enabled = false;
                Option12_Click();
                Text2.Enabled = true;
                Option13_Click();
                Text2.Enabled = true;
                // TODO: Option Explicit ... Warning!!! not translated
                Command1_Click();
                Unload;
                this;
                Cho.Show;
                Form_Load();
                frmSplash.BackColor = RGB(230, 99, 155);
                Skin1.ApplySkin;
                this.hWnd;
                // Me.WindowState = vbMaximized
                Frame1_DragDrop(((Control)(Source)), ((float)(X)), ((float)(Y)));
                frmSplash.BackColor = RGB(50, 200, 250);
            }
            
        }
        
    }